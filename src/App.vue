<template>
	<v-app>
		<v-app-bar color="teal" app>
			<a href="#"
				><v-toolbar-title class="ml-2 white--text">
					Expense Tracker
				</v-toolbar-title></a
			>
		</v-app-bar>

		<v-content class="text-center ma-6">
			<Main />
		</v-content>
	</v-app>
</template>

<script>
import Main from "./components/Main.vue";

export default {
	name: "App",

	components: {
		Main,
	},

	data: () => ({}),
};
</script>

<style scoped>
#total {
	float: right;
}
</style>