<script setup lang='ts'>
import { NButton, NInput, NSpin, useMessage } from 'naive-ui'
import { computed, onMounted, ref } from 'vue'
import { useCode, userTimes } from '@/api'
import { useAuthStore } from '@/store'

// interface CardState {
//   name?: string
//   price?: number
// }

const message = useMessage()
const cardNo = ref('')
const authStore = useAuthStore()
const loading = ref(false)

const buttonDisabled = computed(() => {
  return loading.value || !cardNo.value || cardNo.value.trim() === ''
})

const cardNoRef = ref<typeof NInput | null>(null)
// const cards: any = ref<CardState>()

// async function getCards() {
//   try {
//     loading.value = true
//     const { data } = await fetchCards<CardState>()
//     cards.value = data
//   }
//   finally {
//     loading.value = false
//   }
// }

const handleSubmit = async () => {
  try {
    await useCode(cardNo.value).then((res) => {
      if (res.status === 'Success') {
        message.success(res.message as string)
        getTimes()
      }
    })
  }
  catch (res: any) {
    message.error(res.message as string)
    cardNoRef.value?.focus()
  }
}

async function getTimes() {
  try {
    const result = await userTimes()
    await authStore.setTimes(result.data)
  }
  catch (error: any) {
    message.error(error.message ?? 'error')
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  // getCards()
})
</script>

<template>
  <NSpin :show="loading">
    <div class="p-4 space-y-4">
      <!-- <NGrid x-gap="12" :cols="2">
        <NGi v-for="(card, index) in cards" :key="index">
          <NCard :class="{ 'mt-2': index > 1 }" :title="card.name" hoverable size="medium">
            <div>¥ {{ card.price }}{{ $t('setting.RMB') }}</div>
          </NCard>
        </NGi>
      </NGrid> -->

      <div class="items-center clear">
        <span>✨ {{ $t('setting.contact') }}</span>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex-1">
          <NInput ref="cardNoRef" v-model:value="cardNo" :placeholder="$t('setting.code')" />
        </div>
        <NButton type="success" :disabled="buttonDisabled" @click="handleSubmit">
          {{ $t('setting.verify') }}
        </NButton>
      </div>
    </div>
  </NSpin>
</template>
