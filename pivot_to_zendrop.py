import json

path = r'C:\Users\diegp\clean_launch\inventory.json'
with open(path, 'r') as f:
    inventory = json.load(f)

# Transitioning suppliers to Zendrop (Elite/Standard tiers)
for item in inventory:
    item['supplier'] = "Zendrop"
    item['fulfillment_status'] = "PENDING_ZENDROP_LINK"
    # Keep the same pricing logic but flag for Zendrop sourcing
    item['auto_fulfill'] = True

with open(path, 'w') as f:
    json.dump(inventory, f, indent=2)

print("Inventory logic successfully pivoted to Zendrop.")
