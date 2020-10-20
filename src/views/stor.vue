/* 商城 */

 <template>
	<div>
		<Navyi></Navyi>
		<Naver></Naver>
		<Lunbo></Lunbo>
		<Main></Main>
		<Mainer></Mainer>
	</div>
</template>

<script>
	import Navyi from '@/components/Navyi.vue'
	import Naver from '@/components/Naver.vue'
	import Lunbo from '@/components/lunbo.vue'
	import Main from '@/components/main.vue'
	import Mainer from '@/components/mainer.vue'

	export default{
		name:"book",
		components:{
			Navyi,
			Naver,
			Lunbo,
			Main,
			Mainer
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
</style>
