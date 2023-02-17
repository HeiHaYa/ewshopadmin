<template>
  <div class="pt-4">
    <div class="m-0">
      <img style="margin:auto" src="@/assets/images/logo.png" alt="logo">
    </div>
    <n-menu :options="menuOptions"  :value="defaultKey" inverted @update:value="handleUpdateValue" />
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted,h,Component} from "vue";
import { useRoute, useRouter } from "vue-router";
import {routeModuleList}  from "@/router";
import {generatorMenu} from "@/utils";
// import type {MenuOption} from "naive-ui";
// import {NIcon,useMessage} from "naive-ui";
// import {RouterLink} from "vue-router";
// import {
//   BookOutline as BookIcon,
//   PersonOutline as PersonIcon,
//   WineOutline as WineIcon,
//   HomeOutline as HomeIcon
// } from '@vicons/ionicons5'
//
// function renderIcon (icon: Component) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }
//
// const menuOptions: MenuOption[] = [
//   {
//     label: () =>
//         h(
//             'a',
//             {
//               href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
//               target: '_blank',
//               rel: 'noopenner noreferrer'
//             },
//             '且听风吟'
//         ),
//     key: 'hear-the-wind-sing',
//     icon: renderIcon(BookIcon)
//   },
//   {
//     label: '1973年的弹珠玩具',
//     key: 'pinball-1973',
//     icon: renderIcon(BookIcon),
//     disabled: true,
//     children: [
//       {
//         label: '鼠',
//         key: 'rat'
//       }
//     ]
//   },
//   {
//     label: '寻羊冒险记',
//     key: 'a-wild-sheep-chase',
//     icon: renderIcon(BookIcon),
//     disabled: true
//   },
//   {
//     label: '舞，舞，舞',
//     key: 'dance-dance-dance',
//     icon: renderIcon(BookIcon),
//     children: [
//       {
//         type: 'group',
//         label: '人物',
//         key: 'people',
//         children: [
//           {
//             label: '叙事者',
//             key: 'narrator',
//             icon: renderIcon(PersonIcon)
//           },
//           {
//             label: '羊男',
//             key: 'sheep-man',
//             icon: renderIcon(PersonIcon)
//           }
//         ]
//       },
//       {
//         label: '饮品',
//         key: 'beverage',
//         icon: renderIcon(WineIcon),
//         children: [
//           {
//             label: '威士忌',
//             key: 'whisky'
//           }
//         ]
//       },
//       {
//         label: '食物',
//         key: 'food',
//         children: [
//           {
//             label: '三明治',
//             key: 'sandwich'
//           }
//         ]
//       },
//       {
//         label: '过去增多，未来减少',
//         key: 'the-past-increases-the-future-recedes'
//       }
//     ]
//   }
// ]

const defaultKey = ref("");

onMounted(()=>{
  const route = useRoute();
  // 获取当前路由的key
  const routeKey = route.name;
  if (typeof routeKey === "string") {
    defaultKey.value = routeKey;
  }
});
const router = useRouter();
const menuOptions = generatorMenu(routeModuleList);
const handleUpdateValue=(key) =>{
  // console.log(key,item);
  defaultKey.value = key;
  router.push({name:key});
};

</script>

<style scoped>

</style>