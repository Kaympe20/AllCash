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

        <p v-if="success.success === true" style="color: green;">Sign Up Successful!</p>
        <p v-else-if="success.success === false" style="color: red;">Sign Up Failed! Error: {{ success.error }}</p>
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

    let success = ref({
        success: null as boolean | null,
        error: ''
    });

    async function signUp() {
        try {
            const response = await useFetch<{ success: boolean, error?: string }>('/api/sign-up', {
                method: 'POST',
                body: userSignUpCredentials.value,
            });

            success.value.success = response.data.value?.success ?? false;
            
            if (!success.value.success) {
                success.value.error = response.data.value && 'error' in response.data.value 
                    ? String(response.data.value.error) 
                    : 'Unknown error occurred';
                return;
            }

            return;
        } catch (error) {
            console.error('Sign Up Error:', error);
            return;
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