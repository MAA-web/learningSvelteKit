<script lang="ts">
    import type { ActionData } from './$types'
  
    export let form: ActionData
  </script>
  
  <h1>Login</h1>
  
  <form action="?/login" method="POST">
    <div>
      <label for="username">Username</label>
      <input id="username" name="username" type="text"  />
    </div>
  
    <div>
      <label for="password">Password</label>
      <input id="password" name="password" type="password"  />
    </div>
  
    {#if form?.user}
      <p class="error">Username or password is required.</p>
    {/if}
    {#if form?.right_words_ma_nigga}
      <p class="error">You have entered the wrong words, wrong words man come on</p>
    {/if}
    <button type="submit">Login</button>
  </form>
  