<template>
	<div class="shipItemPrice">
		<div class="description" >{{goods.title}}</div>
		<div class="price">
			<div class="newPrice"><span ></span><span >{{goods.newPrice}}</span></div>
			<div class="oldPrice"><span ></span><span >{{goods.oldPrice}}</span></div>
			<span class="sepcPrice">{{goods.discount}}</span>
		</div>
		<div class="sell-star">
			<div class="sell" v-if="goods.columns">{{goods.columns[0]}}</div>
			<div class="star"  v-if="goods.columns">{{goods.columns[1]}}</div>
			<div class="service1" v-if="goods.services">{{goods.services[goods.services.length-1].name}}</div>
		</div>
		<div class="services" v-if="goods.services">
			<div v-for="index in 3" class="service2" >
				<img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" >
				<img v-if="!goods.services[index-1].icon" src="@/assets/imgs/detail/yes.svg" >
				<span>{{goods.services[index-1].name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShopItemPrice",
		props:{
			goods:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return {logo:'javascript:this.src="'+ require('../../../assets/imgs/detail/yes.svg') + '"'}
		}


	}
</script>

<style scoped>

	.shipItemPrice{
		padding: 0 10px 10px;
		border-bottom: 5px solid #f9f7f7;
	}

	.description{
		padding: 10px 0;
		font-weight: 700;
	}

	.price div{
		float: left;
	}

	.newPrice{
		color: var(--color-tint);
		font-size: 18px;
	}

	.oldPrice{
		color:  #ccc;
		text-decoration:line-through;
		font-size: 10px;
		margin-left: 5px;
		margin-top: 5px;
	}

	.sepcPrice{
		margin-left: 5px;
		color: #fff;
		background-color: var(--color-high-text);
		border-radius: 8px;
		padding: 1px;
	}

	.sell-star{
		margin-top: 20px;
		display: flex;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
	}

	.sell-star div{
		flex: 1;
		color:#ccc;
		font-size: 13px;
	}

	.star{
		text-align: center;
	}

	.service1{
		text-align: right;
	}

	.services{
		font-size: 16px;
		display: flex;
		margin-top:  20px;
	}

	.services div{
		flex: 1;
		font-size: 13px;
		color: #000;
	}



	.services img{
		width: 14px;
		height: 14px;
		position: relative;
		left: 0px;
		top: 2px;
	}

	.services div:nth-child(2){
		text-align: center;
	}
	.services div:nth-child(3){
		text-align: right;
	}



</style>