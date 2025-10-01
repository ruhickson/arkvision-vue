import tkinter as tk
from tkinter import ttk

class DraggableBox:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Draggable Box")
        
        # Remove window decorations
        self.root.overrideredirect(True)
        
        # Make window always on top and set transparency
        self.root.attributes('-topmost', True)
        self.root.attributes('-alpha', 0.7)  # Set transparency (0.0 to 1.0)
        
        # Create main frame with yellow background
        self.frame = ttk.Frame(self.root)
        self.frame.pack(fill='both', expand=True)
        
        # Configure style for yellow background
        self.style = ttk.Style()
        self.style.configure('Yellow.TFrame', background='#FFFF99')  # Light yellow color
        self.frame.configure(style='Yellow.TFrame')
        
        # Create a label that will serve as our draggable area
        self.drag_label = ttk.Label(self.frame, text="Drag Me", cursor="hand2", style='Yellow.TLabel')
        self.drag_label.pack(fill='both', expand=True)
        
        # Configure label style
        self.style.configure('Yellow.TLabel', background='#FFFF99', foreground='black')
        
        # Bind mouse events for dragging
        self.drag_label.bind('<Button-1>', self.start_drag)
        self.drag_label.bind('<B1-Motion>', self.on_drag)
        
        # Add close button
        self.close_button = ttk.Button(self.frame, text="×", width=3, command=self.root.quit)
        self.close_button.pack(side='right', padx=5, pady=5)
        
        # Set initial position and size (4 times bigger)
        self.root.geometry("800x400+100+100")
        
        # Store initial position
        self._drag_data = {"x": 0, "y": 0, "item": None}
        
        # Add resize handles
        self.create_resize_handles()
        
    def create_resize_handles(self):
        # Create resize handles for each edge and corner
        handles = {
            'n': {'cursor': 'sb_v_double_arrow', 'x': 0.5, 'y': 0, 'anchor': 'n'},
            's': {'cursor': 'sb_v_double_arrow', 'x': 0.5, 'y': 1, 'anchor': 's'},
            'e': {'cursor': 'sb_h_double_arrow', 'x': 1, 'y': 0.5, 'anchor': 'e'},
            'w': {'cursor': 'sb_h_double_arrow', 'x': 0, 'y': 0.5, 'anchor': 'w'},
            'ne': {'cursor': 'size_ne_sw', 'x': 1, 'y': 0, 'anchor': 'ne'},
            'nw': {'cursor': 'size_nw_se', 'x': 0, 'y': 0, 'anchor': 'nw'},
            'se': {'cursor': 'size_nw_se', 'x': 1, 'y': 1, 'anchor': 'se'},
            'sw': {'cursor': 'size_ne_sw', 'x': 0, 'y': 1, 'anchor': 'sw'}
        }
        
        for direction, config in handles.items():
            handle = tk.Frame(self.frame, bg='#FFD700', cursor=config['cursor'])
            handle.place(relx=config['x'], rely=config['y'], anchor=config['anchor'])
            
            # Set handle size
            if direction in ['n', 's']:
                handle.config(width=20, height=5)
            elif direction in ['e', 'w']:
                handle.config(width=5, height=20)
            else:  # corners
                handle.config(width=10, height=10)
            
            # Bind resize events with correct direction capture
            handle.bind('<Button-1>', self._make_start_resize(direction))
            handle.bind('<B1-Motion>', self._make_on_resize(direction))
        
    def _make_start_resize(self, direction):
        def start_resize(event):
            self._drag_data["x"] = event.x_root
            self._drag_data["y"] = event.y_root
            self._drag_data["direction"] = direction
        return start_resize

    def _make_on_resize(self, direction):
        def on_resize(event):
            dir = self._drag_data.get("direction", None)
            if dir != direction:
                return
            dx = event.x_root - self._drag_data["x"]
            dy = event.y_root - self._drag_data["y"]
            x = self.root.winfo_x()
            y = self.root.winfo_y()
            width = self.root.winfo_width()
            height = self.root.winfo_height()
            if 'e' in direction:
                width += dx
            if 'w' in direction:
                width -= dx
                x += dx
            if 's' in direction:
                height += dy
            if 'n' in direction:
                height -= dy
                y += dy
            width = max(200, width)
            height = max(100, height)
            self.root.geometry(f"{width}x{height}+{x}+{y}")
            # Update drag data for smooth resizing
            self._drag_data["x"] = event.x_root
            self._drag_data["y"] = event.y_root
        return on_resize
        
    def start_drag(self, event):
        # Store the initial position
        self._drag_data["x"] = event.x
        self._drag_data["y"] = event.y
        
    def on_drag(self, event):
        # Calculate new position
        dx = event.x - self._drag_data["x"]
        dy = event.y - self._drag_data["y"]
        
        # Get current position
        x = self.root.winfo_x() + dx
        y = self.root.winfo_y() + dy
        
        # Move window
        self.root.geometry(f"+{x}+{y}")
        
    def run(self):
        self.root.mainloop()

if __name__ == "__main__":
    app = DraggableBox()
    app.run() 