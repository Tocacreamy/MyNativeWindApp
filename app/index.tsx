import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { useState } from "react";

export default function Index() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={200}
        source={require("../assets/images/bg-app.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1 ">
        <View className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch
                ? "rgba(192, 192, 192, 0.2)"
                : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"gray"}
                className="flex-1 pl-6 h-14 text-white text-base"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => setShowSearch(!showSearch)}
              style={{ backgroundColor: "rgba(192, 192, 192, 0.2)" }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
          {
            locations.length>0 && showSearch?(
              <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                {
                  locations.map((loc, index)=>{
                    let showBorder = index+1 != locations.length;
                    let borderClass = showBorder? 'border-b-2 border-b-gray-400':'';
                    return(
                      <TouchableOpacity
                      key={index}
                      className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}
                      >
                        <MapPinIcon size={20} color={'gray'}/>
                        <Text className="text-black text-lg ml-2">London, United Kingdom</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            ):null
          }
        </View>
      </SafeAreaView>
    </View>
  );
}
