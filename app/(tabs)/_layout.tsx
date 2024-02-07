import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: "mon-sb"
      }
    }}>
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => <Ionicons name='search' {...{ color, size }} />
        }}
      />
      <Tabs.Screen
        name='wishlists'
        options={{
          tabBarLabel: "wishlists",
          tabBarIcon: ({ color, size }) => <Ionicons name='heart-outline' {...{ color, size }} />
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => <FontAwesome6 name='airbnb' {...{ color, size }} />
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='message-outline' {...{ color, size }} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name='person-circle-outline' {...{ color, size }} />
        }}
      />
    </Tabs>
  );
}
