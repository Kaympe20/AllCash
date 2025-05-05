<template>
    <div class="content">
        <h1>This is a lot of text to see if its getting stuck behind the taskbar.</h1>
    </div>
</template>

<style scoped>
.content {
    padding: 20px;
    text-align: left;
    width: calc(100% - var(--sidebar-width) - 40px - 30px);
    margin-left: calc(30px + var(--sidebar-width));
    text-align: center;
}
</style>