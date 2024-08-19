// 1. Define user types

interface UserType {
    name: string;
    email: string;
}

interface Admin extends UserType {
    createUser(user: User): void;
}

interface Moderator extends UserType {
    banUser(contentId: string): void;
}

interface RegularUser extends UserType {
    viewContent(): void;
}

// 2. Union type for users

type User = Admin | Moderator | RegularUser;

// 3. Type Guards

function isAdmin(user: User): user is Admin {
    return 'createUser' in user;
}

function isModerator(user: User): user is Moderator {
    return 'banUser' in user;
}

function isRegularUser(user: User): user is RegularUser {
    return 'viewContent' in user;
}

// 4.	User Management Functions:

const performAdminTask = (user: User, task: () => void): void => {
    if (isAdmin(user)) {
        task();
    } else {
        new Error("Permission denied: Only a Admin can perform given task.");
    }
};

const moderateContent = (user: User, contentId: string): void => {
    if (isModerator(user)) {
        user.banUser(contentId);
    } else {
        throw new Error("Permission denied: Only a Moderator can ban content.");
    }
};

const viewContentAsUser = (user: User): void => {
    if (isRegularUser(user)) {
        user.viewContent();
    } else {
        throw new Error(
            "Permission denied: Only a RegularUser can view content."
        );
    }
};

// 5.	Type Combinations:

type SuperUser = Admin & Moderator;

const superUserTask = (
    user: SuperUser,
    task: (user: SuperUser) => void
): void => {
    task(user);
};
