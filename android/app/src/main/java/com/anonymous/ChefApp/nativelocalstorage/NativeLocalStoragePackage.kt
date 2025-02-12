package com.anonymous.ChefApp

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeLocalStoragePackage : TurboReactPackage(){

    override fun getModule(name : String, reactContext : ReactApplicationContext) : NativeModule?{

        if(name == NativeLocalStorageModule.NAME){
            return NativeLocalStorageModule(reactContext)
        }
        else{
            return null
        }
    }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider{
        mapOf(
            NativeLocalStorageModule.NAME to ReactModuleInfo(
                _name = NativeLocalStorageModule.NAME,
                _clssName = NativeLocalStorageModule.NAME,
                _canOverrideExistingModule = false,
                _needEagerInit = false,
                isCxxModule = false,
                iseTuroModule = true
            )
        )
    }
}