<template>
    <div>
        <h1>Sign-In Options:</h1>

        <p>Authenticated? {{ status }}</p>

        <input type="text" placeholder="Username" v-model="userCredentials.username">
        <input type="password" placeholder="Password" v-model="userCredentials.password">

        <button @click="signIn('credentials', userCredentials)" class="button">
            Sign In
        </button>

        <hr>

        <button @click="() => signOut" class="button">
            Sign Out
        </button>
    </div>
</template>

<script setup lang="ts">
import { signOut } from 'next-auth/react';


    definePageMeta({
        auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' },
    })

    const { signIn , status} = useAuth();

    const userCredentials = ref({
        username: '',
        password: '',
    });
</script>

<style scope>
input {
    display: block;
    margin: 5px auto;
    border-radius: 5px;
    border: none;
    width: 90%;
    max-width: 500px;
}
.dark-mode input {
    background-color: slategrey;
}
.dark-mode input::placeholder {
    color: rgba(255, 255, 255, 0.549);
}
</style>