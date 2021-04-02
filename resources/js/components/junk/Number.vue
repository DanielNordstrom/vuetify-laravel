<template>
    <input type='number' :value='count' @input="$emit('update:count', $event.target.value)" />
</template>

<style>

</style>

<script>
export default {
    props: [
        'count'
    ],
}
</script>
