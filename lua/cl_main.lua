local QBCore = exports['qbx-core']:GetCoreObject()

RegisterNetEvent('onResourceStart', function(resource)
    if resource == GetCurrentResourceName() then
        SendNUIMessage({
            action = "load",
            resourceName = resource
        })
    end
end)

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()

end)

RegisterNetEvent('QBCore:Client:OnPlayerUnload', function()

end)

RegisterNetEvent('QBCore:Client:OnJobUpdate', function(JobInfo)

end)