//
//  MiniVIBEApp.swift
//  MiniVIBE
//
//  Created by 최동규 on 2020/11/16.
//

import SwiftUI
import BCEventEmitter

@main
struct MiniVIBEApp: App {
    let container: DIContainer
    let musicPlayer = MusicPlayer()
    
    init() {
        let serverRepository = RealServerRepository(network: Network())
        let persistenceController = RealPersistenceController()
        let localRepository = RealLocalRepository(persistenceController: persistenceController)
        let eventService = RealEventService(serverRepository: serverRepository, localRepository: localRepository)
        EventSendManager.shared.setEventHandler(eventHandler: eventService.sendOneEvent)
        container = DIContainer(serverRepository: serverRepository,
                                localRepository: localRepository,
                                eventService: eventService)
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView(viewModel: ContentView.ViewModel(container: container)).environmentObject(musicPlayer)
        }
    }
    
}
