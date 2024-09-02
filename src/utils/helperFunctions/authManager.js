import { setItemToLocalStorage, getItemFromLocalStorage, checkItemInLocalStorage, removeItemFromLocalStorage } from "./localStorage";


export const saveAuthenticationToken = (
        access_token,
        refresh_token,
        user_type,
        login_url = "/web/login",
        refresh_url = "tenant/auths/token_refresh",
        key = "userAuth",
        raise_error = false
) => {
        if (checkItemInLocalStorage(key)) {
                if (raise_error) {
                        throw new Error(`Item with ${key} is required for the current user`);
                }
        }

        setItemToLocalStorage('userAuth', JSON.stringify({ access_token, refresh_token, user_type, login_url, refresh_url }))

}


export const getAuthenticationToken = (key = "userAuth") => {
        const data = getItemFromLocalStorage(key)
        if (data) {
                return JSON.parse(String(data))
        }
        return null
}
export const RemoveAuthenticationToken = (key = "userAuth") => {
        return removeItemFromLocalStorage(key)
}

