<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDarkModeStore } from '../store/darkMode';
import { useMenuStore } from '../store/menu';
const darkMode = useDarkModeStore();
const menu = useMenuStore()

const menuSetting = ref({
    isBeatFade: false,
    click: () => menu.menuSwitch()
})
const darkModeSwitchInfo = computed(() => {
    if (darkMode.isDarkMode) return ['vertical', 'text-green-400']
    return ['horizontal', 'text-red-400']
})

onMounted(() => {
    const backToTopButton = document.getElementById('backToTop');
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
        }, 1000);
    });
})
</script>

<template>
    <nav class="fixed w-full z-50">
        <div class="h-full flex justify-between items-center">
            <div class="flex items-center gap-2 sm:gap-8">
                <span class="cursor-pointer" @mouseover="menuSetting['isBeatFade'] = true"
                    @mouseleave="menuSetting['isBeatFade'] = false">
                    <font-awesome-icon icon="bars" size="2xl" :beat-fade="menuSetting['isBeatFade']"
                        @click="menuSetting['click']" />
                </span>
                <strong class="text-2xl cursor-pointer" id="backToTop">Dashboard</strong>
            </div>
            <div>
                <!-- <span class="relative mr-2">
                    <font-awesome-icon icon="earth" size="xl" />
                    <span class="absolute -right-1.5 -bottom-2 bg-green-200 text-black text-sm font-extrabold rounded-xl">
                        en
                    </span>
                </span> -->
                <span class="sm:hidden">{{ $t('Header.darkMode') }}:</span>
                <button @click="darkMode.darkModeSwitch(!darkMode.isDarkMode)">
                    <font-awesome-icon icon="toggle-on" size="2xl" :flip="darkModeSwitchInfo[0]"
                        :class="darkModeSwitchInfo[1]" />
                </button>
            </div>
        </div>
    </nav>
</template>