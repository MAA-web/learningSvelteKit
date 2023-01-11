//console.log("hi")
import { fail, redirect } from '@sveltejs/kit'
//import { invalid } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from './$types';
import bcrypt from 'bcrypt';
import { database } from '$lib/database';
enum Roles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export const load: PageServerLoad = async ( locals ) => {
    if (locals.locals.people_we_own) {
        console.log("hi")
        throw redirect(302, '/')
        
    }
}

const register: Action = async ({ request }) => {
    const data = await request.formData()
    const username = data.get('username');
    const password = data.get('password');
    //username = username + '.';
    //password = password + '.';
    console.log({username, password})
    //console.log(data)
    if (typeof username != 'string' || typeof password != 'string' || !username || !password || password == '' || username == '') {
        console.log("Dude type the right words");
        return fail(400, {invalid: true, right_words_ma_nigga: true})
    }

    const user = await database.user.findUnique({
        where: {username}
    })

    if (user) {
        return fail(400, {user : true})
    }

    await database.user.create({
        data: {
            username,
            passwordHash: await bcrypt.hash(password, 10),
            userAuthToken: crypto.randomUUID(),
            role: {connect: {name: Roles.USER}},
        },
    })
    throw redirect(303, '/login')
}

export const actions: Actions = {
  register  
};

