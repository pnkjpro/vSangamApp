import { defineStore } from 'pinia';
import { ref, watch, computed, reactive, onMounted, inject } from 'vue';
import { format, isToday, isYesterday } from "date-fns";
import axios from 'axios';

// const api = axios.create({ baseURL: config.value.apiUrl });


export const useCourseStore = defineStore('course', () => {
    const courses = ref([]);
    const currentCourse = ref(null);
    const lessons = ref([]);
    const currentLesson = ref(null);
    const modules = ref([]);
    const currentModule = ref(null);
    const loading = ref(false);
    const errorMessage = ref(null);
    const author = ref(null);
    const config = inject('config');

    const fetchCourse = async (courseId) => {
        loading.value = true;
        try {
            const response = await axios.post(`${config.API_URL}/api/courses/playlistByCourse`, {
                course_id: courseId,
            });

            const { lessons: courseLessons, author: courseAuthor, ...courseWithoutLessonsAndAuthor } = response.data.course;
            
            currentCourse.value = courseWithoutLessonsAndAuthor;
            author.value = courseAuthor;
            lessons.value = courseLessons;  // ✅ Updates lessons correctly
        } catch (error) {
            errorMessage.value = error.response?.data?.message || "Error fetching course";
        } finally {
            loading.value = false;
        }
    };


    const listCourses = () => {
        loading.value = true;
        axios.get(`${config.API_URL}/api/courses`)
           .then(response => {
                courses.value = response.data.courses;
            })
           .catch(error => {
                errorMessage.value = error.response.data.message;
            })
           .finally(() => {
                loading.value = false;
            });
    }
    // console.log("visited pinia");
    const getModules = (lessonId) => {
        const lesson = lessons.value.find(lesson => lesson.id === Number(lessonId));
        if (!lesson) {
            console.error(`Lesson with ID ${lessonId} not found`);
            return;
        }
        modules.value = lesson.modules;
    }
    return {
        author,
        currentCourse, 
        lessons, 
        courses,
        currentLesson, 
        modules, 
        currentModule, 
        loading, 
        errorMessage, 
        listCourses,
        fetchCourse,
        getModules 
    };
})