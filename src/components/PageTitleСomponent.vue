<script>
export default {
    props: {
        pageTitle: {
            type: String,
            required: true
        }
    }
}

</script>

<template>
    <h1 class="title-big">{{ pageTitle }}</h1>
</template>