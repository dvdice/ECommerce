<template>
  <span
      v-if="showBadge"
      :class="[
      'badge',
      `badge--${type}`,
      { 'badge--round': round, 'badge--small': small }
    ]"
  >
    {{ +displayValue > 99 ? "99+" : displayValue}}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    value: {
        type: [String, Number],
        default: ''
    },
    type: {
        type: String,
        default: 'primary', // primary, success, danger, warning, info
        validator: (val) => ['primary', 'success', 'danger', 'warning', 'info'].includes(val)
    },
    round: {
        type: Boolean,
        default: false
    },
    small: {
        type: Boolean,
        default: false
    },
    hideIfZero: {
        type: Boolean,
        default: false
    }
})

const showBadge = computed(() => {
    if (props.hideIfZero && props.value === 0) return false
    return String(props.value).length > 0
})

const displayValue = computed(() => {
    return props.value
})
</script>

<style scoped>
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 4px;
    font-size: 10px;
    /*top: -10px;
    right: -8px;*/
    bottom: calc(100% - 12px);
    left: calc(100% - 12px);
    font-weight: 600;
    border-radius: 15px;
    color: white;
    position: absolute;
    background-color: #007bff; /* fallback */
}

.badge--round {
    border-radius: 50%;
    padding: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
}

.badge--small {
    font-size: 0.75rem;
    padding: 0.15rem 0.3rem;
}

.badge--round.badge--small {
    width: 1.25rem;
    height: 1.25rem;
}

/* Цвета */
.badge--primary { background-color: #007bff; }
.badge--success { background-color: #28a745; }
.badge--danger  { background-color: #dc3545; }
.badge--warning { background-color: #ffc107; color: #212529; }
.badge--info    { background-color: #17a2b8; }
</style>
