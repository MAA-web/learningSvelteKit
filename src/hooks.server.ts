import type { Handle } from "@sveltejs/kit";

import { database } from "$lib/database";

export const handle: Handle = async({
    event,
    resolve
}) => {
    const session = event.cookies.get('dont_look_at_me')
    
    if (!session) {
        return await resolve(event)
    }

    const user = await database.user.findUnique({
        where: {userAuthToken: session},
        select: { username: true, role: true}
    })

    if (user) {
        event.locals.people_we_own = {
            name: user.username,
            role: user.role.name,
        }
    }
    return await resolve(event)
}

console.log("hooks")