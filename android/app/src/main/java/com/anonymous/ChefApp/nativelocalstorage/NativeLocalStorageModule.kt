package com.anonymous.ChefApp

import android.content.Context
import android.content.SharedPreferences
import com.nativelocalstorage.NativeLocalStorageSpec
import com.facebook.react.bridge.ReactApplicationContext

class NativeLocalStorageModule(
    reactContext : ReactApplicationContext
    ) : NativeLocalStorageSpec(reactContext)
{

    override fun getName() = NAME

    private val sharedPref: SharedPreferences by lazy {
        reactContext.getSharedPreferance("my_prefs" , Context.MODE_PRIVATE)
    }
    
    // val sharedPref = getReactApplicationContext().getSharedPreferance("my_prefs", Context.MODE_PRIVATE)
    //     val editor = sharedPref.edit()
    //     editor.putString(key, value)
    //     edit.apply()

    override fun setStringItem(value : String, key:String){
        sharedPref.edit().apply{
            putString(key, value)
            apply()
        }
    }

    override fun setNumberItem(value : Int , key : String){
        sharedPref.edit().apply{
            putInt(key, value)
            apply()
        }
    }

    override fun getStringItem(key : String) : String? {
        val data = sharedPref.getString(key , null)
        return data.toString()
    }

    override fun getNumberItem(key : String) : Int? {
        val data = sharedPref.getInt(key , 0)
        return data
    }

    override fun removeItem(key : String){
        sharedPref.edit().apply{
            remove(item)
            apply()
        }
    }

    override fun clear(){
        sharedPref.edit().apply{
            clear()
            apply()
        }
    }

    companion object {
        const val NAME = "NativeLocalStorage"
    }

}