<script lang="ts">
    import type { ActionData } from './$types'
  
    export let form: ActionData
  </script>
  
  <h1>Register</h1>
  
  <form action="?/register" method="POST">
    <div>
      <label for="username">Username</label>
      <input id="username" name="username" type="text"  />
    </div>
  
    <div>
      <label for="password">Password</label>
      <input id="password" name="password" type="password"  />
    </div>
  
    {#if form?.user}
      <p class="error">Username is taken.</p>
    {/if}
    {#if form?.right_words_ma_nigga}
        <p class="error">Type the right words ma nigga</p>
    {/if}
  
    <button type="submit">Register</button>
  </form>
  <a href="/login">Login</a>