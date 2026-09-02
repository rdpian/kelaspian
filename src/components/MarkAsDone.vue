<template>
  <div class="mark-done-container">
    <button 
      @click="toggleComplete" 
      :class="['done-btn', { completed: isCompleted }]"
    >
      <span v-if="isCompleted">✓ Modul Selesai</span>
      <span v-else>Tandai Selesai</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  lessonId: {
    type: String,
    required: true
  }
});

const isCompleted = ref(false);

const STORAGE_KEY = 'ecourse_completed_lessons';

const getCompletedLessons = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

onMounted(() => {
  const completed = getCompletedLessons();
  isCompleted.value = completed.includes(props.lessonId);
});

const toggleComplete = () => {
  let completed = getCompletedLessons();
  
  if (isCompleted.value) {
    completed = completed.filter(id => id !== props.lessonId);
    isCompleted.value = false;
  } else {
    if (!completed.includes(props.lessonId)) {
      completed.push(props.lessonId);
    }
    isCompleted.value = true;
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
};
</script>

<style scoped>
.mark-done-container {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--sl-color-gray-5);
}

.done-btn {
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--sl-color-accent);
  background-color: transparent;
  color: var(--sl-color-accent-high);
}

.done-btn:hover {
  background-color: var(--sl-color-accent-low);
}

.done-btn.completed {
  background-color: #10b981;
  color: #ffffff;
  border-color: #10b981;
}
</style>