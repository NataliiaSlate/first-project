// 3. Type Guards
function isAdmin(user) {
    return user.createUser !== undefined;
}
function isModerator(user) {
    return user.banUser !== undefined;
}
function isRegularUser(user) {
    return user.viewContent !== undefined;
}
// 4.	User Management Functions:
var performAdminTask = function (user, task) {
    if (isAdmin(user)) {
        task();
    }
    else {
        new Error("Permission denied: Only a Admin can perform given task.");
    }
};
var moderateContent = function (user, contentId) {
    if (isModerator(user)) {
        user.banUser(contentId);
    }
    else {
        throw new Error("Permission denied: Only a Moderator can ban content.");
    }
};
var viewContentAsUser = function (user) {
    if (isRegularUser(user)) {
        user.viewContent();
    }
    else {
        throw new Error("Permission denied: Only a RegularUser can view content.");
    }
};
var superUserTask = function (user, task) {
    task(user);
};
