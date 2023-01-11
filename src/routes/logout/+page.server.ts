import { redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad} from './$types'

export const load: PageServerLoad = async () => {
    throw redirect(302, '/')
}

export const actions: Actions = {
    default({ cookies }) {
        cookies.set('dont_look_at_me', '', {
            path: '/',
            expires: new Date(0),
        })
    console.log("dfgdfg")
    throw redirect(302, '/login')
    },
}