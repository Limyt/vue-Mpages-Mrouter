<template>
    <div>
        <p>这是login的propt页面，就是login.html的初始页面</p>
		<button @click="jump()">跳转到not页面</button>
    </div>
</template>

<script>
export default {
    methods:{
	    jump(){
		    this.$router.push('/not')
		}
	}
}
</script>

<style lang="scss">

</style>