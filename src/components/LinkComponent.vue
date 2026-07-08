<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: false
        },
        classItem: {
            type: String
        }

    }
}
</script>

<template>
    <li :class="classItem">
        <RouterLink :to="link">
            {{ text }}<slot></slot>
        </RouterLink>
    </li>
</template>