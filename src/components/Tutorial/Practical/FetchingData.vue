<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { GithubRepo } from '@/types/FetchingData'

const API_URL = `https://api.github.com/users/kalliub/repos?sort=created&direction=desc`
const repos = ref<GithubRepo[] | null>(null)
const loading = ref(true)

const filterRepos = (reposList: GithubRepo[]) => {
  const reposToBeFiltered = ['kalliub']
  return reposList.filter((iRepo) => !reposToBeFiltered.includes(iRepo.name))
}

watchEffect(async () => {
  loading.value = true
  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      setTimeout(() => {
        repos.value = filterRepos(res)
        loading.value = false
      }, 1000)
    })
})
</script>

<template>
  <h1 v-if="loading">Loading...</h1>

  <div v-else>
    <h1>Some of my GitHub Repos</h1>

    <div v-if="repos" style="display: flex">
      <div class="profile-data">
        <img :src="repos[0].owner.avatar_url" alt="githubpic" class="avatar-pic" />
        <div class="">
          <span style="font-size: x-large">Visit my profile!</span>
          <span
            >We currently have
            <b>
              {{ repos.length }}
            </b>
            repositories
          </span>
          <a :href="repos[0].owner.html_url" target="_blank" style="max-width: fit-content">
            <button type="button">Open {{ repos[0].owner.login }} on new tab</button>
          </a>
        </div>
      </div>
    </div>

    <template v-for="repo in repos" v-bind:key="repo">
      <ul>
        <li>
          <div class="list-item">
            <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
            <pre class="repo-language">{{ repo.language }}</pre>
            <span class="repo-description">{{ repo.description }}</span>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.profile-data {
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 16px;
  gap: 32px;
}
.profile-data div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.avatar-pic {
  border-radius: 100%;
  width: 150px;
}
.list-item {
  display: flex;
  flex-direction: column;
}

.repo-description {
  color: grey;
}

.repo-language {
  background-color: rgba(0, 0, 0, 0.1);
  width: fit-content;
  padding: 5px;
}
</style>
