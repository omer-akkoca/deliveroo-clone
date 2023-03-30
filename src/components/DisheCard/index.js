import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from "../../redux/slices/basketSlice";

const DisheCard = ({ item }) => {

    const dispatch = useDispatch()

    const [isPressed,setIsPressed] = useState(false)
    const items = useSelector(state => selectBasketItemsWithId(state,item.id))

    const addToMyBasket = () => {
        dispatch(addToBasket(item))
    }

    const removeFromMyBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket(item.id))
    }

    return(
        <TouchableOpacity onPress={() => setIsPressed(e => !e)}>
            <View className="flex-row py-2 px-4 border-b border-gray-100 bg-white">
                <View className="flex-1 pr-4">
                    <Text className="font-medium text-base">{item.title}</Text>
                    <Text className="text-xs text-gray-500 mb-2">{item.description}</Text>
                    <Text className="text-xs text-gray-500 mb-2">{item.price}₺</Text>
                    {
                        isPressed && (
                            <View className="flex-row items-center space-x-2">
                                <TouchableOpacity
                                    onPress={() => removeFromMyBasket()}
                                    disabled={!items.length>0}
                                >
                                    <MinusCircleIcon size={35} color={items.length > 0 ? "#00ccbb" : "gray"} />
                                </TouchableOpacity>
                                <Text className="text-sm">{items.length}</Text>
                                <TouchableOpacity onPress={() => addToMyBasket()}>
                                    <PlusCircleIcon size={35} color="#00ccbb" />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
                <View>
                    <Image
                        source={{ uri: item.img }}
                        className="h-20 w-20 object-contain"
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export { DisheCard };