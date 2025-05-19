<script setup lang="ts">
    const value = ref(true)

</script>


<template>
    <div class="card">
        <h1>Settings</h1>
    </div>
    <div class="card">
        <h3>Color Mode</h3>
            <Ubutton class="button" id="darkbutton">Dark</Ubutton>
            <Ubutton class="button">System</Ubutton>
            <Ubutton  class="button" id="lightbutton">Light</Ubutton>
            <USwitch v-model="value"
            </div>
</template>

<style scoped>

    #lightbutton{
        background-color: white; 
        color:black;
    }

    #darkbutton{
        background-color: black; 
        color:white;
    }

    .button:hover{
    background-color: gray;
    }
</style>