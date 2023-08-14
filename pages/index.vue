<script setup>
const story = await useStoryblok('home', { 
  version: 'draft',
  resolve_relations: 'featuredProjects.project'
},{
  resolveRelations: 'featuredProjects.project'
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content"> </StoryblokComponent>

</template>
