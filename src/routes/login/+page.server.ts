//console.log("hi")
import { fail, redirect } from '@sveltejs/kit'
//import { invalid } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';
import { database } from '$lib/database';
import { applyAction } from '$app/forms';

export const load: PageServerLoad =async (locals) => {
    if (locals.locals.people_we_own) {
        throw redirect(302, '/')
        
    }
}

const login: Action =async ({cookies, request}) => {
    const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')

    if (typeof username != 'string' || typeof password != 'string' || !username || !password || password == '' || username == '') {
        console.log("Dude type the right words");
        return fail(400, {right_words_ma_nigga: true})
        
    }

    const user = await database.user.findUnique({
        where: {username}
    })
    if (!user) {
        return fail(400, {user:true})
    }

    const user_provided_password = await bcrypt.compare(password, user.passwordHash)

    if (!user_provided_password) {
        return fail(400, {right_words_ma_nigga: true})
    }

    const authenticatedUser = await database.user.update({
        where: { username: user.username},
        data: {userAuthToken: crypto.randomUUID()}
    })
    cookies.set('dont_look_at_me', authenticatedUser.userAuthToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV == 'production',
        maxAge: 60 * 60 * 42 * 30,
    })
    throw redirect(302, '/')

}


export const actions: Actions = {login}