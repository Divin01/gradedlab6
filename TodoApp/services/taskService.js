import firestore from '@react-native-firebase/firestore';

// Add a new task
export const addTask = async (task) => {
  try {
    const docRef = await firestore().collection('tasks').add({
      text: task,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

// Get all tasks
export const getTasks = async () => {
  try {
    const snapshot = await firestore().collection('tasks').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting tasks:', error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id) => {
  try {
    await firestore().collection('tasks').doc(id).delete();
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};