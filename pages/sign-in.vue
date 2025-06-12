<template>
    <div>
        <h1>Sign-In Options:</h1>

        <p>Authenticated? {{ status }}</p>

        <input type="text" placeholder="Username" v-model="userSignInCredentials.username">
        <input type="password" placeholder="Password" v-model="userSignInCredentials.password">

        <button @click="signIn('credentials', userSignInCredentials)" class="button">
            Sign In
        </button>

        <hr>
        <h1>Sign Up</h1>

        <input type="email" placeholder="Email" v-model="userSignUpCredentials.email">
        <input type="text" placeholder="Username" v-model="userSignUpCredentials.username">
        <input type="password" placeholder="Password" v-model="userSignUpCredentials.password">

        <button @click="signUp()" class="button">
            Sign Up
        </button>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' },
    })

    const { signIn } = useAuth();
    let { status } = useAuth();

    const userSignInCredentials = ref({
        username: '',
        password: '',
    });

    const userSignUpCredentials = ref({
        username: '',
        password: '',
        email: '',
    });

    async function signUp() {
        try {
            const response = await useFetch('/api/sign-up', {
                method: 'POST',
                body: userSignUpCredentials.value,
            });
        } catch (error) {
            console.error('Sign Up Error:', error);
        }
    }
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