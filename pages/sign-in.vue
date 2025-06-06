<template>
    <div>
        <p>Sign-In Options:</p>
        <button @click="signIn('credentials', demoCredentials)">
            Username and Password
        </button>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: false,
        auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' },
    })

    const { signIn } = useAuth();

    const demoCredentials = { username: 'test', password: 'hunter2' };
</script>
