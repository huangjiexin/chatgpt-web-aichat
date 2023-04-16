<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { NModal, NTabPane, NTabs, useMessage } from 'naive-ui'
import General from './General.vue'
import Package from './Package.vue'
import Advanced from './Advanced.vue'
import About from './About.vue'
import Site from './Site.vue'
import Mail from './Mail.vue'
import { SvgIcon } from '@/components/common'
import { useAuthStore, useUserStore } from '@/store'
import { userTimes } from '@/api'

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const userStore = useUserStore()
const authStore = useAuthStore()

const isChatGPTAPI = computed<boolean>(() => !!authStore.isChatGPTAPI)
const message = useMessage()

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const active = ref('General')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})

async function getTimes() {
  try {
    const result = await userTimes()
    await authStore.setTimes(result.data)
  }
  catch (error: any) {
    message.error(error.message ?? 'error')
  }
}

watch(
  show,
  (visible) => {
    if (visible)
      getTimes()
  },
  { immediate: true },
)
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" style="width: 95%; max-width: 640px">
    <div>
      <NTabs v-model:value="active" type="line" animated>
        <NTabPane name="General" tab="General">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:file-user-line" />
            <span class="ml-2">{{ $t('setting.general') }}</span>
          </template>
          <div class="min-h-[100px]">
            <General />
          </div>
        </NTabPane>
        <NTabPane name="Package" tab="Package">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:list-settings-line" />
            <span class="ml-2">{{ $t('setting.package') }}</span>
          </template>
          <div class="min-h-[100px]">
            <Package />
          </div>
        </NTabPane>
        <NTabPane v-if="isChatGPTAPI" name="Advanced" tab="Advanced">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:equalizer-line" />
            <span class="ml-2">{{ $t('setting.advanced') }}</span>
          </template>
          <div class="min-h-[100px]">
            <Advanced />
          </div>
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="Config" tab="Config">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:list-settings-line" />
            <span class="ml-2">{{ $t('setting.config') }}</span>
          </template>
          <About />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="SiteConfig" tab="SiteConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:settings-line" />
            <span class="ml-2">{{ $t('setting.siteConfig') }}</span>
          </template>
          <Site />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="MailConfig" tab="MailConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:mail-line" />
            <span class="ml-2">{{ $t('setting.mailConfig') }}</span>
          </template>
          <Mail />
        </NTabPane>
      </NTabs>
    </div>
  </NModal>
</template>
