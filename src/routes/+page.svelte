<div class="top">
<div class="r-and-l">
    <a  href="/register">Register</a>
    <a href="/login">Login</a></div>
<button >hi</button>
<button>hey</button>
<button>hello</button>
</div>
<div class="bottom">
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button>
    sup sup
</button>
<a href="/register">Register</a>
<a href="/login">Login</a>
</div>

<form class="logout" action="/logout" method="post">
    <button type="submit">Log out</button>
</form>

<style>
    .r-and-l {
        flex: content;
        flex-direction: row;
    }
</style>