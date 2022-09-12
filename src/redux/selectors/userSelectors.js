
export const getUsers = (state) => state.usersPage.users;

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getInFollowingProgress = (state) =>
  state.usersPage.inFollowingProgress;

/* export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
 */
