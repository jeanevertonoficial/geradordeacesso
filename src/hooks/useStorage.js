import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () => {
  //stages
  //Buscar os itens salvos
  const getItem = async (key) => {
    try {
        const passwods = await AsyncStorage.getItem(key);
        return JSON.parse(passwods) || [];

    } catch(error) {
        console.log("Erro ao buscar", error)
        return [];
    }
  }

  //Salvar um item no storage
  const saveItem = async (key, value) => {
    try {
      let passwods = await getItem(key);
      passwods.push(value)
      
      await AsyncStorage.setItem(key, JSON.stringify(passwods))

    } catch(error) {
        console.log("Erro ao salvar", error);
    }
  }

  // Remover algo do storage
  const removeItem = async (key, item) => {
    try {
     let passwods = await getItem(key)
     let myPasswords = passwods.filter( (passwods) => {
        return (passwods !== item)
     })

     await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

     return myPasswords

    } catch(error) {
        console.log("Erro ao remover", error)
    }
  }

  return {
    getItem,
    saveItem,
    removeItem
  }
}

export default useStorage;