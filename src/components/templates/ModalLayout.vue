<template>
    <teleport to="#modalLayout">
        <div class="dim"></div>

        <div class="popup_wrap">
            <div class="popup type_01" :style="modalStyle">
                <strong class="terms_title">{{ title }}</strong>

                <div class="Modal_content_wrap" :style="contentStyle">
                    <LoadingBar v-if="isLoading"/>

                    <div class="text_box" v-else>
                        <slot name="content"></slot>
                    </div>
                </div>

                <div>
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script lang="ts" setup>
/***********************************************************************************************************/
/*                                             I M P O R T                                                 */
/***********************************************************************************************************/
    import { computed, defineProps, toRefs } from 'vue'
    import LoadingBar from '../atoms/etc/LoadingBar.vue';

/***********************************************************************************************************/
/*                                               D A T A                                                   */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                            C O M P U T E D                                              */
/***********************************************************************************************************/
    const modalStyle = computed(() => {
        return `width: ${width.value}px; height: ${height.value}px`;
    })

    const contentStyle = computed(() => {
        return `height: ${height.value - 100}px`;
    })

/***********************************************************************************************************/
/*                                              P R O P S                                                  */
/***********************************************************************************************************/
    const props = withDefaults(defineProps<{ title: string, width: number, height: number, isLoading: boolean }>(), { title: '모달 제목을 넣으세요.', width: 800, height: 400, isLoading: true });
    const { title, width, height, isLoading } = toRefs(props);


/***********************************************************************************************************/
/*                                           L I F E C Y C L E                                             */
/***********************************************************************************************************/


/***********************************************************************************************************/
/*                                             M E T H O D                                                 */
/***********************************************************************************************************/
    

/***********************************************************************************************************/
/*                                               E M I T                                                   */
/***********************************************************************************************************/
    
</script>

<style scoped>
    .dim { display: block; width: 100%; height: 100%; position: fixed; left: 50%; top: 0;  background-color: rgba(0,0,0,0.7); transform: translateX(-50%); z-index: 100; } 
    
    .popup_wrap { display: block; width: 100%; height: 100%; position: fixed; left: 50%; max-width: 786px; min-width: 360px; transform: translateX(-50%); z-index: 200; } 
    .popup_wrap .popup { display: block; z-index: 250; } 
    .popup_wrap .popup.active { display: block; } 
    .popup_wrap .popup.type_01 { position: absolute; left: 50%; transform: translate(-50%, -50%); width: calc(100% - 48px); background-color: #ffffff; text-align: center; padding: 24px; border-radius: 5px; } 
    .popup_wrap .popup.type_01 .Modal_content_wrap { width: 100%; height: 45vh; max-height: 400px; padding: 12px; background: #f4f4f4; margin-top: 20px; overflow-y: scroll; }
    .popup_wrap .popup.type_01 .title { font-weight: 700; font-size: 16px; line-height: 24px; color: #333333; } 
    .popup_wrap .popup.type_01 .title { font-weight: 700; font-size: 16px; line-height: 24px; color: #333333; } 
    .popup_wrap .popup.type_01 .text { margin-top: 20px; font-weight: 300; font-size: 14px; line-height: 115%; letter-spacing: 0.05em; color: #666666; } 
    .popup_wrap .popup.type_01 .btn { margin-top: 20px; display: block; width: 100%; text-align: center; height: 56px; line-height: 56px; background-color: #F37321; font-weight: 500; font-size: 18px; color: #ffffff; border-radius: 8px; } 
</style>