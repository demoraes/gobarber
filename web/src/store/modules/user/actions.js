export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(prfile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { prfile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}
