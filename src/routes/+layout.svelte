<script lang='ts'>
    import {page} from '$app/stores'
</script>

<svelte:head>
    <title>
        SvelteKit Auth
    </title>
</svelte:head>

<nav>
    {#if !$page.data.user}
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <p>user not present</p>
    {/if}

    {#if $page.data.user}
        <a href="/dashboard">Dashboard</a>
        <p>user present</p>
        <form class="logout" action="/logout" method="post">
            <button type="submit">Log out</button>
        </form>
    {/if}
</nav>

<p>jkl</p>
<main>
    <slot />
</main>