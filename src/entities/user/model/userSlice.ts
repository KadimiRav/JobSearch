import { createEntityAdapter, createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { User, UserAssignments, UserProfile, UsersState } from './types'

const usersAdapter = createEntityAdapter<User>()
const { selectAll } = usersAdapter.getSelectors()

const initialState: UsersState = usersAdapter.getInitialState()

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer: (state: UsersState, action: PayloadAction<User>): void => {
        // Старые назначения не учитывают нового пользователя, поэтому сбрасываем их
        for (const user of Object.values(state.entities)) {
          user.assignedUserId = null
        }
        usersAdapter.addOne(state, action.payload)
      },
      prepare: (profile: UserProfile): { payload: User } => ({
        payload: { id: nanoid(), assignedUserId: null, ...profile },
      }),
    },
    assignmentsGenerated: (state: UsersState, action: PayloadAction<UserAssignments>): void => {
      for (const [userId, assignedUserId] of Object.entries(action.payload)) {
        const user = state.entities[userId]
        if (user) user.assignedUserId = assignedUserId
      }
    },
  },
  selectors: {
    selectUsers: (state: UsersState): User[] => selectAll(state),
  },
})

export const { userAdded, assignmentsGenerated } = userSlice.actions
export const { selectUsers } = userSlice.selectors
