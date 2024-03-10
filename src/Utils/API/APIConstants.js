export const AUTH_BASEURL = "https://www.reddit.com/api/v1/";
export const APIBASEURL = 'https://oauth.reddit.com/'
export const APIBaseURL = 'https://www.reddit.com/'

export const APIEndPoints = {
    LOGIN: 'access_token',
    userProfile: 'api/v1/me',
    subredditList: 'subreddits/mine/subscriber',
    postList: 'r/popular.json',

}

export const RequestMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
}


export const ApiErrors ={
    NO_INTERNET:"No Internet Connection",
    SERVER_ERROR:"Server Error",
    UNAUTHORIZED:"You have entered an invalid username or password. Please try again.",
    BAD_REQUEST:"Bad Request",
    NOT_FOUND:"Not Found",
    TIMEOUT:"Request Timeout",
    UNKNOWN_ERROR:"Unknown Error",
    user_name_and_password_does_not_match:"user name and password does not match",
    Something_went_wrong:"Something went wrong",
    invalid_grant:"invalid_grant"


}

export const BASIC_AUTH = {
    username:"",//client id
    password:"" //client secret
}