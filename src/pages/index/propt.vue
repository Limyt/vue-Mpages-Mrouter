<template>
    <div>
        <p>这是index的propt页面，就是index.html的初始页面</p>
		<button @click="jump()">跳转到detail页面</button>
    </div>
</template>

<script>
export default {
    methods:{
	    jump(){
		    this.$router.push('/detail')
		}
	}
}
</script>

<style lang="scss">

</style>