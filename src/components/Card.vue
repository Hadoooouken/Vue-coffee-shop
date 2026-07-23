<script>
export default {
    props: {

        classItem: {
            type: String,
            required: false
        },

        card: {
            type: Object,
            required: true
        }

    },
    methods: {
        onEmit(id) {
          
            this.$emit('onNavigate', id)
        }
    },
 
}
</script>

<template>
    <div :class="classItem" @click="onEmit(card.id)">
        <img :src="card.image" :alt="card.img">
        <div class="best__item-title">
            {{ card.name }}
        </div>
        <div class="best__item-price">{{ card.price }}</div>
    </div>
</template>