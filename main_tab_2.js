Vue.component('tabs',{
	template: `
		<div>
			<div class="tabs">
				<ul>
					<li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
						<a href="#" @click="selecteTab(tab)" >{{ tab.name}}</a>
					</li>
				</ul>
			</div>
			<div class="tab-details">
			<slot></slot>
			</div>
		</div>
	`,
	data(){
		return {
			tabs:[]
		}
	},
	created(){
		this.tabs = this.$children;
	},
	methods:{
		selecteTab(selectedtab){
			this.tabs.forEach(tab=>{
				tab.isActive = ( tab.name == selectedtab.name)
			})
		}
	}
});

Vue.component('tab',{
	template: `<div v-show="isActive"><slot></slot></div>`,
	props:{ 
		name: { required : true },
		selected : { default:false}
	},
	data(){
		return {
			isActive : false
		}
	},

	computed:{
		href(){
			return '#' + this.name.toLowerCase().replace(/ /g,'-');
		}
	},
	mounted(){
		this.isActive = this.selected;
	}

});
new Vue({
	el:'#app'
})